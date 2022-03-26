import axios from "axios";

export default async function handler(req, res) {
    const { data } = await axios.post(`http://backend:1337/graphql`, {
        query: `query {
            drinks {
              data {
                id
                attributes {
                  name
                  size
                  bottles
                  price
                  brand {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  categories{data{attributes{name}}}
                }
              }
            }
          }
          `,
    });

    res.status(200).json(data.data.drinks.data);
}
