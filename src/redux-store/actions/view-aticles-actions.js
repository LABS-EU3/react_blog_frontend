import axios from 'axios';
import { apiURL } from '../../utilities/urls';

import {
    VIEW_ARTICLES,
    VIEW_ARTICLES_FAIL,
    VIEW_ARTICLES_SUCCESS
} from './types';

export const handleViewArticles = () => async dispatch => {
    dispatch({
        type: VIEW_ARTICLES
    });
    try {
        let result = await axios.get(`${apiURL}/articles`);
        if(result)
            dispatch({
                type: VIEW_ARTICLES_SUCCESS,
                payload: result
            });
    } catch(error){
        console.log(error);
        dispatch({
            type: VIEW_ARTICLES_FAIL,
            payload: error
        })
    }
}
