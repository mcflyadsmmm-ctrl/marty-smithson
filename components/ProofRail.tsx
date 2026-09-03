import { BooksMatrix } from "@/components/BooksMatrix";
import { CostStrip } from "@/components/CostStrip";
import { PortalRoles } from "@/components/PortalRoles";

export function ProofRail({
  prefix = "/work/systems-fleet",
  showPortal = false,
}: {
  prefix?: string;
  showPortal?: boolean;
}) {
  return (
    <div className="proof-rail" aria-label="Black Clover proof">
      {showPortal ? <PortalRoles compact /> : <BooksMatrix prefix={prefix} />}
      <CostStrip />
    </div>
  );
}
