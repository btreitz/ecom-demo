import { gql } from '../../__generated__/gql';

export const productsQuery = gql(/* GraphQL */ `
	query getProducts(
		$productQuery: String = ""
		$maxProducts: Int = 100
		$sortKey: ProductSortKeys = UPDATED_AT
		$reverse: Boolean = false
	) {
		products(query: $productQuery, first: $maxProducts, sortKey: $sortKey, reverse: $reverse) {
			edges {
				node {
					id
					title
					productType
					images(first: 100) {
						nodes {
							height
							width
							url
						}
					}
					collections(first: 1) {
						nodes {
							id
							title
						}
					}
					priceRange {
						minVariantPrice {
							amount
							currencyCode
						}
					}
				}
			}
		}
	}
`);
