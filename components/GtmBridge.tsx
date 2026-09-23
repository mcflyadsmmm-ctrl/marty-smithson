import { gtmBridge } from "@/lib/content";

export function GtmBridge() {
  return (
    <section className="section gtm-bridge" aria-labelledby="gtm-title">
      <p className="field">{gtmBridge.field}</p>
      <h2 id="gtm-title">{gtmBridge.title}</h2>
      <p>{gtmBridge.body}</p>
    </section>
  );
}
