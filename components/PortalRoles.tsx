import { fleet } from "@/lib/content";

export function PortalRoles() {
  const { identities } = fleet;

  return (
    <figure className="roles">
      <figcaption>{identities.title}</figcaption>
      <ul className="role-grid">
        {identities.roles.map((role) => (
          <li key={role.title}>
            <h3>{role.title}</h3>
            <p>{role.sees}</p>
            <p className="role-rule">{role.rule}</p>
          </li>
        ))}
      </ul>
    </figure>
  );
}
