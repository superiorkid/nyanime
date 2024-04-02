import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Data } from "@/types/Anime";

interface OverviewTabsContentProps {
  anime: Data;
}

const OverviewTabsContent = ({ anime }: OverviewTabsContentProps) => {
  return (
    <div className="flex space-x-12">
      <aside className="w-80">
        <h1 className="text-xl font-semibold">Details</h1>

        <Table className="mt-5">
          <TableBody>
            <TableRow className="border-none h-6">
              <TableCell className="text-zinc-400">Type</TableCell>
              <TableCell>{anime.type ?? "Unknown"}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-zinc-400">Episodes</TableCell>
              <TableCell>{anime.episodes ?? "Unknown"}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-zinc-400">Genres</TableCell>
              <TableCell>
                {anime.genres.map((genre) => genre.name).join(", ") ??
                  "Unknown"}
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-zinc-400">Aired</TableCell>
              <TableCell>{anime.aired.string ?? "Unknown"}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-zinc-400">Status</TableCell>
              <TableCell>{anime.status ?? "Unknown"}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-zinc-400">Season</TableCell>
              <TableCell>
                {anime.season ?? "Unknown"} {anime.year ?? "Unknown"}
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-zinc-400">Studios</TableCell>
              <TableCell>{anime.studios.at(0)?.name ?? "Unknown"}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-zinc-400">Rating</TableCell>
              <TableCell>{anime.rating ?? "Unknown"}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-zinc-400">Duration</TableCell>
              <TableCell>{anime.duration ?? "Unknown"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </aside>
      <main className="flex-1 prose prose-lg prose-h1:text-xl prose-h1:font-semibold prose-h1:text-background prose-p:text-zinc-400">
        <h1>Synopsis</h1>
        <p>{anime.synopsis}</p>

        {anime.background && (
          <>
            <h1>Background</h1>
            <p>{anime.background}</p>
          </>
        )}
      </main>
    </div>
  );
};

export default OverviewTabsContent;
