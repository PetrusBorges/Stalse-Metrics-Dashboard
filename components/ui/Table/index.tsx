"use client";

import { useMemo } from "react";
import { Card } from "../Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../Button";
import { cn } from "@/lib/utils";
import { Skeleton } from "../Skeleton";

interface IColumn {
  header: string;
  accessor: string;
}

interface ITableProps {
  isLoading?: boolean;
  title: string;
  description: string;
  columns: IColumn[];
  data: Record<string, unknown>[];
}

export const Table = ({
  isLoading,
  title,
  description,
  data,
  columns,
}: ITableProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const currentPage = Number(searchParams.get("page") ?? 1);
  const statusFilter = searchParams.get("status") ?? "";

  const filteredData = useMemo(() => {
    if (!statusFilter) return data;

    return data.filter((item) =>
      String(item.status)
        .toLocaleLowerCase()
        .includes(statusFilter.toLocaleLowerCase()),
    );
  }, [data, statusFilter]);

  const items_per_page = 5;

  const startIndex = (currentPage - 1) * items_per_page;
  const endIndex = startIndex + items_per_page;

  const paginatedData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / items_per_page);

  const handleUpdateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    if (key === "status" && value) {
      params.set("status", value);
      params.set("page", "1");
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  if (isLoading) return <Skeleton className="h-[460px] w-full" />;

  return (
    <Card className="overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Button
            className={cn(
              "text-xs",
              statusFilter === "Ativa" && "bg-[#FF9500]",
            )}
            onClick={() => handleUpdateSearchParams("status", "Ativa")}
          >
            Ativa
          </Button>
          <Button
            className={cn(
              "text-xs",
              statusFilter === "Pausada" && "bg-[#FF9500]",
            )}
            onClick={() => handleUpdateSearchParams("status", "Pausada")}
          >
            Pausada
          </Button>
          <Button
            className={cn("text-xs", !statusFilter && "bg-[#FF9500]")}
            onClick={() => handleUpdateSearchParams("status", "")}
          >
            Todas
          </Button>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-body  border-t border-gray-300 dark:border-gray-700 mt-4">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                scope="col"
                className="px-6 py-3 font-medium uppercase"
              >
                {column.accessor}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr
              key={index}
              className="bg-neutral-primary hover:bg-[#FF9500]/30 border-b border-default"
            >
              {columns.map((column) => (
                <td key={column.accessor} className="px-6 py-4">
                  {String(row[column.accessor] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-body mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Mostrando{" "}
          <span className="font-semibold text-heading">
            {filteredData.length === 0 ? 0 : startIndex + 1}-
            {Math.min(startIndex + items_per_page, filteredData.length)}
          </span>{" "}
          de{" "}
          <span className="font-semibold text-heading">
            {filteredData.length}
          </span>
        </span>
        <ul className="flex -space-x-px text-sm">
          <li>
            <button
              onClick={() =>
                handleUpdateSearchParams("page", String(currentPage - 1))
              }
              disabled={currentPage === 1}
              className="cursor-pointer disabled:cursor-not-allowed border rounded-l-md w-9 h-9 flex items-center justify-center transition-all duration-300 hover:bg-gray-300"
            >
              <ChevronLeft />
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <li key={page}>
                <button
                  onClick={() => handleUpdateSearchParams("page", String(page))}
                  className={`cursor-pointer w-9 h-9 border transition-all duration-300 hover:bg-gray-300 ${
                    currentPage === page
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : ""
                  }`}
                >
                  {page}
                </button>
              </li>
            ),
          )}

          <li>
            <button
              onClick={() =>
                handleUpdateSearchParams("page", String(currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="cursor-pointer disabled:cursor-not-allowed border rounded-r-md w-9 h-9 flex items-center justify-center transition-all duration-300 hover:bg-gray-300"
            >
              <ChevronRight />
            </button>
          </li>
        </ul>
      </nav>
    </Card>
  );
};
