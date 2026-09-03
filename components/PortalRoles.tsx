import { fleet } from "@/lib/content";

export function PortalRoles({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { identities } = fleet;

  return (
    <figure className={compact ? "figure roles is-compact" : "figure roles"}>
      <figcaption>
        <span className="field">Who sees what</span>
        {identities.lead}
      </figcaption>
      <div className="figure-body">
        <table className="matrix">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Sees</th>
              <th scope="col">Writes</th>
            </tr>
          </thead>
          <tbody>
            {identities.roles.map((role) => (
              <tr key={role.title}>
                <td>{role.title}</td>
                <td>{role.sees}</td>
                <td className="role-rule">{role.rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
