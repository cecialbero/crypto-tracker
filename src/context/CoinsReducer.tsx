import { CoinsActionType } from './types'
import { CoinType } from '../model'

interface CoinsAction {
    type: CoinsActionType;
    payload: Array<CoinType>
}

export const CoinsReducer = (state: any, action: CoinsAction) => {
    switch(action.type) {
        case CoinsActionType.GET:
            return {
                ...state,
            }
    }
}