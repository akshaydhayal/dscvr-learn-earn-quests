export const metaplexQuestData = {
  heading: "Metaplex Core",
  subheading: "Next Generation Solana NFT Standard",
  track_image: "https://example.com/metaplex_core.jpg",
  points: 600,
  subtracks: [
    {
      heading: "Introduction to Metaplex Core",
      subheading: "Overview of Metaplex Core",
      subtrack_image: "https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png",
      points: 150,
      pages: [
        {
          heading: "What is Metaplex Core?",
          content: [
            "Metaplex Core is a next-generation NFT standard on Solana, designed to reduce minting costs and improve network load. It introduces a single-account design, which simplifies asset management and enhances performance.",
            "The Core Standard provides cost efficiency by significantly lowering minting costs compared to previous standards. Additionally, its single-account design focuses on NFTs, using just one account to track ownership and reduce complexity.",
            "The system also includes advanced plugin support, allowing developers to customize asset behavior and functionality, making it a versatile choice for digital assets on Solana.",
          ],
        },
        {
          heading: "Advantages of Metaplex Core",
          content: [
            "One of the key advantages of Metaplex Core is its unprecedented cost efficiency. Minting an NFT with Core is significantly cheaper compared to alternatives like Token Metadata.",
            "The single-account model reduces the complexity of managing NFTs and the associated costs. By storing essential data in a single account, Core minimizes the amount of data stored on-chain, leading to reduced fees and better network performance.",
            "Core also enforces royalties by default, and supports first-class collection management, allowing for collection-wide operations and advanced plugin support.",
          ],
        },
        {
          heading: "Key Features",
          content: [
            "Metaplex Core includes features such as enforced royalties, flexible plugin support, and collection management. These features provide developers with powerful tools for managing and customizing digital assets.",
            "The plugin architecture allows developers to add custom behaviors at various stages of an asset’s lifecycle, such as creation, transfer, and burning. This flexibility supports a wide range of use cases and applications.",
            "Collections in Core are handled as first-class assets, offering advanced management features like collection-wide updates and royalty adjustments.",
          ],
        },
        {
          heading: "Getting Started with Core",
          content: [
            "To get started with Metaplex Core, visit the official Core website at https://core.metaplex.com/. Here you can explore features, mint assets, and view documentation.",
            "The Core API reference provides detailed information on interacting with Core assets, including how to create, fetch, update, and manage assets and collections.",
            "For developers familiar with Token Metadata, the Differences to MPL Token Metadata page provides an overview of new features and changes in Core.",
          ],
        },
      ],
      quiz: [
        {
          question: "What is a primary advantage of Metaplex Core compared to previous standards?",
          options: ["a) Higher minting costs", "b) Lower minting costs", "c) More complex account management"],
          answer: "b) Lower minting costs",
          explaination: "Metaplex Core offers lower minting costs compared to previous standards, making it more cost-efficient for creating NFTs.",
        },
        {
          question: "How does Metaplex Core handle asset management?",
          options: ["a) Using multiple accounts", "b) Using a single account", "c) Using external storage"],
          answer: "b) Using a single account",
          explaination: "Metaplex Core uses a single account design to manage assets, simplifying asset management and reducing complexity.",
        },
      ],
    },
    {
      heading: "Working with Core Assets",
      subheading: "Managing and Interacting with Core Assets",
      subtrack_image: "https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png",
      points: 150,
      pages: [
        {
          heading: "Creating Core Assets",
          content: [
            "Creating a Core Asset involves a straightforward process with just one create instruction. This eliminates the need for separate metadata minting, streamlining asset creation.",
            "The `Asset` struct in Metaplex Core includes essential fields such as `key`, `owner`, `update_authority`, `name`, and `uri`, which are used to define and manage assets.",
            "Developers can use the Core API to create assets programmatically, ensuring that all necessary data is included and the asset is properly registered on the Solana blockchain.",
          ],
        },
        {
          heading: "Fetching and Updating Core Assets",
          content: [
            "To fetch a Core Asset, use the `fetchAssetV1` function from the Core API. This allows you to retrieve asset data by its public key and view its associated metadata.",
            "Updating a Core Asset involves modifying its fields and potentially interacting with plugins. The update process ensures that any changes to the asset are reflected on the blockchain.",
            "Developers can manage asset updates through the Core API, which provides methods for adjusting asset properties and interacting with plugins.",
          ],
        },
        {
          heading: "Transferring and Burning Assets",
          content: [
            "Transferring a Core Asset requires specifying the new owner and ensuring that the transfer complies with any plugin rules or restrictions.",
            "Burning an asset involves removing it from circulation, which can be done using the `burn` function. This operation permanently deletes the asset and its associated data from the blockchain.",
            "Both transferring and burning assets can be managed through the Core API, providing a comprehensive set of tools for handling asset lifecycle events.",
          ],
        },
        {
          heading: "Managing Collections",
          content: [
            "Core allows for advanced collection management by treating collections as first-class assets. This enables developers to manage collections and perform operations at the collection level.",
            "Collection-level operations include updating royalties, freezing assets, and applying plugins. These actions can be performed in a single transaction, simplifying collection management.",
            "Developers can use the Core API to create and manage collections, providing additional flexibility and control over grouped assets.",
          ],
        },
      ],
      quiz: [
        {
          question: "How is a Core Asset created?",
          options: ["a) With multiple instructions", "b) With a single create instruction", "c) Through an external process"],
          answer: "b) With a single create instruction",
          explaination: "Creating a Core Asset involves a single create instruction, streamlining the process compared to multiple-step approaches.",
        },
        {
          question: "What can be managed at the collection level in Metaplex Core?",
          options: ["a) Only individual assets", "b) Only metadata", "c) Royalties, freezing, and plugins"],
          answer: "c) Royalties, freezing, and plugins",
          explaination: "Core allows for collection-level management of royalties, freezing, and plugins, making it easier to manage grouped assets.",
        },
      ],
    },
    {
      heading: "Core Plugins and Extensions",
      subheading: "Extending Core Functionality",
      subtrack_image: "https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png",
      points: 150,
      pages: [
        {
          heading: "Overview of Core Plugins",
          content: [
            "Metaplex Core supports a range of plugins that extend asset functionality, such as the Autograph Plugin, Transfer Delegate Plugin, and Royalties Plugin.",
            "Plugins allow developers to add custom behaviors and enforce rules during asset lifecycle events like creation, transfer, and burning.",
            "The plugin architecture is designed to be flexible, enabling developers to tailor asset functionality to meet specific needs and use cases.",
          ],
        },
        {
          heading: "Adding and Removing Plugins",
          content: [
            "To add a plugin to a Core Asset, use the `addPlugin` function provided by the Core API. This function allows you to specify the type of plugin and its associated parameters.",
            "Removing a plugin is also managed through the Core API, providing the ability to adjust asset functionality as needed.",
            "Developers can use these functions to dynamically update asset behavior and adapt to changing requirements.",
          ],
        },
        {
          heading: "Delegation and Revocation",
          content: [
            "Core includes plugins for delegating and revoking permissions, such as the Freeze Delegate Plugin and Transfer Delegate Plugin.",
            "Delegating permissions allows for flexible asset management, while revocation ensures that permissions can be adjusted or removed as necessary.",
            "These plugins enhance the versatility of Core Assets and support a wide range of use cases.",
          ],
        },
        {
          heading: "Using External Plugins",
          content: [
            "Metaplex Core supports external plugins, which can be integrated into the Core framework to extend functionality.",
            "External plugins include the Oracle Plugin and AppData Plugin, which provide additional features and data integration options.",
            "Developers can add and manage external plugins to enhance the capabilities of Core Assets and support specialized use cases.",
          ],
        },
      ],
      quiz: [
        {
          question: "What is the purpose of Core plugins?",
          options: ["a) To add custom behaviors", "b) To create new assets", "c) To update metadata"],
          answer: "a) To add custom behaviors",
          explaination: "Core plugins are used to add custom behaviors and enforce rules during asset lifecycle events, enhancing asset functionality.",
        },
        {
          question: "How can a plugin be removed from a Core Asset?",
          options: ["a) By using the `removePlugin` function", "b) By manually editing the asset", "c) By deleting the asset"],
          answer: "a) By using the `removePlugin` function",
          explaination:
            "Plugins can be removed using the `removePlugin` function provided by the Core API, allowing for dynamic updates to asset functionality.",
        },
      ],
    },
  ],
};