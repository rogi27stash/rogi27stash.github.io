export default {
  navigation: {
    introduction: 'Introduction',
    faq: 'FAQ',
    gallery: 'Gallery',
    download: 'Download',
  },
  pages: {
    index: {
      metaTitle: 'Iris Shaders',
      intro: {
        heading: 'Iris Shaders',
        description:
          'The Iris Project is a collaborative open-source project created by a team of passionate developers seeking to make the Minecraft shaders experience on Fabric the best that it can be. Iris is developed by the community, for the community.',
        buttons: {
          downloads: 'Downloads',
          learn_more: 'Learn more',
        },
        author_copyright:
          'Beautiful photos by <b>{0}</b>, <b>{1}</b> and <b>{2}</b>',
      },
      features: {
        title: 'Features',
        optifine_parity: {
          title: 'OptiFine Parity',
          description:
            'Iris aims to have full support for all past and present OptiFine shaderpacks, and the number of packs supported by Iris is constantly and rapidly growing.',
        },
        sodium_support: {
          title: 'Sodium Support',
          description:
            'Iris is compatible with CaffeineMC optimization mods such as Sodium and Phosphor, enabling stunning graphics at frames comparable to or even better than vanilla.',
        },
      },
      advantages: {
        title: 'Advantages',
        advantages: [
          {
            title: 'Shadow Optimization',
            description:
              "Using Iris's shadow frustum culling, you'll be able to reach higher frame rates without sacrificing the quality of volumetric lighting or shadows.",
          },
          {
            title: 'Efficient Entity Rendering',
            description:
              'Iris improves the way that Minecraft renders entities and block entities like chests, pigs, and item frames.',
          },
          {
            title: 'Modern Design',
            description:
              'Iris has been built from the ground up to be extensible and easy to update. Say goodbye to weeks of waiting to use shaders on the new Minecraft version!',
          },
        ],
      },
      download_now: {
        title: 'Download Now',
        buttonText: 'Move to Downloads Page',
      },
    },
    downloads: {
      metaTitle: 'Iris Downloads',
      title: 'Few clicks to get shaders',
      description:
        'We created the automated installer for our mod, it will automatically download and install Iris and Sodium for great graphics at smooth framerates.',
      subinfo: `Latest version of Iris is <a href="/releases">{0}</a> and installer is <a href="https://github.com/IrisShaders/Iris-Installer/releases"
      >{1}</a>`,
      buttonInstaller: 'Download Installer',
      manualTitle: 'You prefer manual installation? No problem.',
    },
    gallery: {
      metaTitle: 'Iris Gallery',
      title: 'Photos made by Iris community',
      photo_copyright: 'by',
    },
    faq: {
      metaTitle: 'Iris Help',
      title: "Let's help fix your problem",
      solutions: [
        {
          title: "Why doesn't the Iris-Installer work?",
          description: [
            `You need Java, please get it from <a href="https://adoptopenjdk.net/?variant=openjdk16&jvmVariant=hotspot">AdoptOpenJDK</a>`,
          ],
        },
        {
          title: 'How can I configure my shaders?',
          description: [
            `You can't currently, a configuration menu will be coming in a future version.`,
          ],
        },
        {
          title: 'Why is (insert shader) not working?',
          description: [
            `That shader currently isn't supported, but should in the future.`,
          ],
        },
        {
          title: 'How do I disable my shaders?',
          description: [`Press K to disable shaders without the GUI.`],
        },
        {
          title: 'I added iris, why is my game crashing?',
          description: [
            `• You're using a version of Iris obtained from Modrinth or Curseforge. This version already includes Sodium with it and having another copy of Sodium causes a crash.`,
            `• You're using outdated Indium, Sodium Extras or Better Sodium Menu`,
            `• You're using Iris version 1.17 on Intel (All) or AMD GPU Linux (MESA)`,
            `• You're using an unsupported shader pack`,
            `• You're using MacOS, which has limited support `,
            `• You may have an incompatible mod installed, such as Immersive Portals. (Compatibility with Immersive portals is WIP.)`,
          ],
        },
        {
          title: 'What shaders currently tested and working with Iris?',
          description: [
            `<b>Well working:</b>`,
            `Astralex, BSL Shaders, Complementary Shaders, Continuum 1.3 , Continuum 2.0.4, PSXify, SEUS V11, SEUS Renewed, Sildur's Enhanced Default, Sildur's Vibrant Shaders, Skylec v4.0, Tea V1.5.3, XorDev's shaders`,
            `<br>`,
            `<b>Minor issues:</b>`,
            `BeyondBeliefShaders V1.2.0 [reflections broken], BQ Shaders Low [reflections broken], Project Luma [No Sky, broken end portals/gateways], Triliton V8 [reflections broken], Windom [reflections broken]
            `,
          ],
        },
      ],
    },
    release_notes: {
      metaTitle: 'Iris Release Notes',
      title: 'Release Notes',
    },
  },
  footer: {
    about: {
      title: 'About the Iris Project',
      description:
        'Iris was created to fill a void that I saw in the Minecraft customization and graphical enhancement community: the lack of an open-source shaders mod that would let me load my favorite shader packs on modern versions of the game, while retaining performance and compatibility with modpacks.',
    },
    links: {
      title: 'Links',
      items: {
        download_now: 'Download Now',
        curseforge: 'Page on CurseForge',
        modrinth: 'Page on Modrinth',
      },
    },
    socials: {
      title: 'Socials',
      items: {
        github: 'GitHub',
        discord: 'Discord',
        patreon: 'Patreon',
      },
    },
    copyright: [
      '© Copyright 2021 IrisShaders. All Rights Reserved.',
      'Website by',
    ],
  },
}
