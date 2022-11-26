type Props = {
  required?: boolean;
  value: string;
  setValue: (value: string) => void;
};

export const TextInput = ({ required, value, setValue }: Props) => (
  <input
    type="text"
    className="bg-zinc-900 border-2 border-zinc-600 rounded text-zinc-50 text-sm focus:ring-blue-600 focus:border-blue-600 focus-visible:outline-none block w-full p-2.5"
    required={required}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);
