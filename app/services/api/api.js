import request from 'then-request';

export const post = (url, data) => request('POST', url);
  
export const mockPost = (url, data, mockResponse, mockErrorResponse, isMockingError) => {
	if(isMockingError)
		return Promise.reject('POST request to '+url+' failed with error: '+mockErrorResponse);
	else
		return Promise.resolve(mockResponse);
};

export default {post, mockPost};