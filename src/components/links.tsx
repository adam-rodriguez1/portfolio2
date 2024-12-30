import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons';

export default function Links() {
  const links: { icon: IconType; href: string; label: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:adamrodrigue2094@gmail.com',
      label: 'Envoyer un email à Adam Rodriguez',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/adam-rodriguez1',
      label: 'Voir le profil GitHub de Adam Rodriguez',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com',
      label: 'Voir le profil LinkedIn de Adam Rodriguez',
    },
  ];

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a
            key={id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label} // Attribut ARIA pour les lecteurs d'écran
          >
            <link.icon title={link.label} /> {/* Icône avec un titre pour une accessibilité supplémentaire */}
          </a>
        );
      })}
    </div>
  );
}
