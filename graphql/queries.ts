import { gql } from "@apollo/client"

const GET_ALL_SLUGS = gql`
  query {
    proyectos {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`

const GET_PROJECT_BY_SLUG = gql`
  query ($urlSlug: String!) {
    proyecto(urlSlug: $urlSlug) {
      data {
        attributes {
            titulo
          descripcion
          urlSlug
          pageShow {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

const GET_ALL_PROJECTS = gql`
  query {
    proyectos (pagination: { start: 0, limit: 15 }) {
      data {
        attributes {
          titulo
          descripcion
          urlSlug
            pageShow {
                data {
                attributes {
                    url
                }
                }
            }

        }
      }
    }
  }
`

export { GET_ALL_SLUGS, GET_PROJECT_BY_SLUG, GET_ALL_PROJECTS }