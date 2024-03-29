import clsx from "classnames";
import { TrashIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Button from "../button";
import { Link } from "react-router-dom";

type Row = { id: number } & {
  [key: string]: number | string;
};

export type TableProps = {
  rows?: Row[];
  columns?: { label: string; key: string }[];
  onDelete?: (id: number) => void;
  detailsUrl?: (id: number) => string;
};

type TableHeaderProps = { columns: { label: string; key: string }[] };

type TableBodyProps = {
  rows: Row[];
  columns: { label: string; key: string }[];
  onDelete?: (id: number) => void;
  detailsUrl?: (id: number) => string;
};

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns?.[0] ? (
          <th
            scope="col"
            className="min-w-[6rem] py-3.5 pl-2 pr-3 text-left text-sm font-semibold text-gray-900"
          >
            {columns[0].label}
          </th>
        ) : (
          <></>
        )}
        {columns.slice(1).map((col) => (
          <th
            key={col.key.toString()}
            scope="col"
            className="pl-2 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            {col.label}
          </th>
        ))}
        <th />
      </tr>
    </thead>
  );
};

const TableBody: React.FC<TableBodyProps> = ({
  rows,
  columns,
  onDelete,
  detailsUrl,
}) => {
  return (
    <tbody className="bg-white">
      {rows.map((row, idx) => (
        <tr
          key={row.id}
          className={clsx(idx % 2 == 0 ? "bg-gray-50" : "bg-white")}
        >
          {columns.map((column) => (
            <td className="pl-2 pr-3" key={column.key}>
              {row[column.key]}
            </td>
          ))}
          <td className="px-3 py-4 flex justify-end items-center gap-3">
            <Button
              size="sm"
              variant="error"
              onClick={() => onDelete?.(row.id)}
            >
              <TrashIcon className="w-6 h-6" />
            </Button>
            <Link to={detailsUrl?.(row.id) ?? "#"}>
              <Button size="sm" variant="secondary">
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const Table: React.FC<TableProps> = ({
  rows = [],
  columns = [],
  onDelete,
  detailsUrl,
}) => {
  return (
    <div className="flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <table className="min-w-full table-fixed">
            <TableHeader columns={columns} />
            <TableBody
              rows={rows}
              columns={columns}
              onDelete={onDelete}
              detailsUrl={detailsUrl}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
