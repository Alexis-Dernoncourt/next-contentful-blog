const POST_GRAPHQL_FIELDS = `
    sys {
      id
    }
    id
    title
    slug
    content
    image {
      url
      description
      width
      height
    }
    date
`

const SECTION_INFOS_GRAPHQL_FIELDS = `
    sys {
      id
    }
    title
    textContent{
        json
    }
`

async function fetchGraphQL(query, preview = false) {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
            preview
                ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
            }`,
        },
        body: JSON.stringify({ query }),
        }
    ).then((response) => response.json())
    .catch(e => console.log(e))
}

function extractPostEntries(fetchResponse) {
    return fetchResponse?.data?.blogPostCollection?.items
}

function extractInfosEntries(fetchResponse) {
    return fetchResponse?.data?.sectionInfosCollection?.items
}

function extractPost(fetchResponse){
    return fetchResponse?.data?.blogPostCollection?.items[0];
}

export async function getAllPosts(preview, options = '') {
    const entries = await fetchGraphQL(
        `query {
            blogPostCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'} ${options && `, ${options}`}) {
            items {
                ${POST_GRAPHQL_FIELDS}
            }
        }
        }`,
        preview
    )
    return extractPostEntries(entries)
}

export async function getAllSectionInfos(preview, options = '') {
    const sectionInfos = await fetchGraphQL(
        `query {
            sectionInfosCollection(preview: ${preview ? 'true' : 'false'} ${options && `, ${options}`}) {
            items {
                ${SECTION_INFOS_GRAPHQL_FIELDS}
            }
        }
        }`,
        preview
    )
    return extractInfosEntries(sectionInfos)
}

export async function getPostAndMorePosts(preview, slug){
    // Get a singlepost/entry
    const entry = await fetchGraphQL(
        `query{
            blogPostCollection(where: {slug:"${slug}"}, preview:${preview ? true : false}){
                items{
                    ${POST_GRAPHQL_FIELDS}
                }
            }
        }`
    );

    // Get entries
    const entries = await fetchGraphQL(
        `query{
            blogPostCollection(preview:${preview ? true : false},limit:4, order:date_DESC){
                items{
                    ${POST_GRAPHQL_FIELDS}
                }
            }
        }`
    );

    // Extract a post
    const post = extractPost(entry);
    
    // Get the related posts
    const relatedPosts = extractPostEntries(entries).filter((p) => p.slug !== post.slug);

    return {
        post,
        relatedPosts
    };
}
