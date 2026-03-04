import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
const httpLink = new HttpLink({
	uri: 'https://api.stratz.com/graphql'
})

const authLink = setContext((_, { headers }) => {
	const token = import.meta.env.VITE_TOKEN
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	}
})

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				heroStats: {
					// Если данные не пагинированные, обычный merge может дублировать стейт
					merge(existing = {}, incoming) {
						return { ...existing, ...incoming }
					}
				}
			}
		}
	}
})

const client = new ApolloClient({
	// Соединяем линки правильно
	link: authLink.concat(httpLink),
	cache
	// Удалил localState и incrementalHandler, если ты не используешь @client и @defer
})

export default client
