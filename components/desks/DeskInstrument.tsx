import { CashMerDesk } from "@/components/desks/CashMerDesk";
import { IncrementalityDesk } from "@/components/desks/IncrementalityDesk";
import { McflyLiveDesk } from "@/components/desks/McflyLiveDesk";
import { NutricostDesk } from "@/components/desks/NutricostDesk";
import { assertDeskSlug, type DeskSlug } from "@/lib/desks";

export function DeskInstrument({ slug }: { slug: DeskSlug }) {
  const kind = assertDeskSlug(slug);
  switch (kind) {
    case "mcfly":
      return <McflyLiveDesk />;
    case "cash-mer":
      return <CashMerDesk />;
    case "incrementality":
      return <IncrementalityDesk />;
    case "nutricost":
      return <NutricostDesk />;
    default: {
      const _never: never = kind;
      return _never;
    }
  }
}
