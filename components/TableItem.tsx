type Props = {
  index: number;
};

export default function TableItem({ index }: Props) {

  return (
    <tr
      className={`divide-x group divide-neutral-800 text-neutral-500 cursor-pointer ${
        ++index % 2 == 0 && "bg-neutral-800/40"
      } hover:bg-neutral-950/50`}
    >
      <td className="p-4 w-4 opacity-50 group-hover:opacity-100">
        <div className="flex items-center">
          <input
            id="checkbox-table-1"
            type="checkbox"
            className="w-4 h-4 text-neutral-600 bg-neutral-500 rounded"
          />
          <label htmlFor="checkbox-table-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td className="p-4 py-2 sm:py-4 sm:hidden">
        <div className="flex flex-col">
          <span>Pavel Lebedov</span>
          <span>Office manager</span>
          <span className="font-bold">p.lebedov@gmail.com</span>
        </div>
      </td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">Pavel Lebedov</td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">Office manager</td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
        p.lebedov@gmail.com
      </td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
        13.07.03, 2 Nov, 2022
      </td>
      <td className="p-4 py-2 sm:py-4 hidden sm:table-cell">
        12.10.07, 2 Sep, 2022
      </td>
      <td className="p-4 py-2 sm:py-4">
        <span className="p-[3px] rounded-full px-2 bg-opacity-50 bg-neutral-800 text-green-700">
          Active
        </span>
      </td>
    </tr>
  );
}
