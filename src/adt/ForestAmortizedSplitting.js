import { rankedtreeunion , _RankedTreeUniverse } from '../fundamentals' ;

export const union = rankedtreeunion ;

export function find ( p , node ) {

	let parent = p[node] ;

	for ( ; p[parent] !== parent ; parent = p[node] ) {

		p[node] = p[parent] ;
		node = parent ;

	}

	return parent ;

}

export const Universe = _RankedTreeUniverse( union , find ) ;

export default {
	Universe ,
	union ,
	find ,
} ;
