import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "../../atoms/button";
import { TextInput } from "../../atoms/text-input";
import { FormElement } from "../../molecules/form-element";

type Practice = { id: string; date: string; team: string; link: string };

export const Practices = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [practices, setPractices] = useState<Practice[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [team, setTeam] = useState("");
  const [link, setLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchPractices = useCallback(() => {
    if (!user) {
      return;
    }

    return supabase
      .from("practices")
      .select<string, Practice>(`id, team, link`)
      .eq("user_id", user.id)
      .then(({ error, data }) => {
        if (error || !data) {
          return;
        }
        setPractices(data);
      });
  }, [supabase, user]);

  useEffect(() => {
    fetchPractices();
  }, [fetchPractices]);

  const showForm = () => {
    setIsFormOpen(true);
  };

  const hideForm = () => {
    setIsFormOpen(false);
  };

  const createPractice = async (e: FormEvent) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    setIsSubmitting(true);

    try {
      await supabase
        .from("practices")
        .insert({ id: uuid(), user_id: user.id, team, link });

      await fetchPractices();
      hideForm();
      setTeam("");
      setLink("");
    } catch (e) {}

    setIsSubmitting(false);
  };

  const deletePractice = async (id: string) => {
    try {
      await supabase.from("practices").delete().eq("id", id);
      await fetchPractices();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="m-2">
      <h2>Practices</h2>
      {isFormOpen ? (
        <form className="flex flex-col gap-2" onSubmit={createPractice}>
          <FormElement label="Team:">
            <TextInput value={team} setValue={setTeam} required />
          </FormElement>
          <FormElement label="Link:">
            <TextInput value={link} setValue={setLink} required />
          </FormElement>
          <Button type="submit" disabled={!user || isSubmitting}>
            Add
          </Button>
        </form>
      ) : (
        <Button type="button" onClick={showForm}>
          Add practice
        </Button>
      )}
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {practices.map(({ id, team, link }) => (
            <tr key={id}>
              <td>{team}</td>
              <td>{link}</td>
              <td>
                <Button
                  type="button"
                  onClick={() => {
                    deletePractice(id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
