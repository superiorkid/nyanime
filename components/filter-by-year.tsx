import { Button } from "@/components/ui/button";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

interface FilterByYearProps {
  router: AppRouterInstance;
  pathname: string;
  createQueryString: (name: string, value: string) => string;
  searchParams: ReadonlyURLSearchParams;
}

const FilterByYear = ({
  createQueryString,
  pathname,
  router,
  searchParams,
}: FilterByYearProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 5 }).map((_, index) => {
        const currentYear = new Date().getFullYear();
        return (
          <Button
            key={index}
            variant={
              searchParams.get("year") === (currentYear - index).toString()
                ? "secondary"
                : "default"
            }
            onClick={() =>
              router.push(
                pathname +
                  "?" +
                  createQueryString("year", (currentYear - index).toString()),
                { scroll: false }
              )
            }
          >
            {currentYear - index}
          </Button>
        );
      })}
      <Button
        variant={!searchParams.get("year") ? "secondary" : "default"}
        className="last:-order-1 first:order-1"
        onClick={() =>
          router.push(pathname + "?" + createQueryString("year", ""), {
            scroll: false,
          })
        }
      >
        All
      </Button>
    </div>
  );
};

export default FilterByYear;
