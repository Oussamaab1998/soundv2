//---------- imports
import React, { useEffect, useState } from 'react';

//---------- main component
const useServerCommunucation = () => {

    //---------- state and veriables
    const [dataPocket, setDataPocket] = useState({});
    const [previousKey, setPreviousKey] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //---------- helper

    const serverRequest = (object) => {

        if (object.request_type.toLowerCase() === 'get') {

            let temp_response1 = {
                [object.key]: {

                    loading: true,
                    status: 'pending',
                    status_code: undefined,
                    response: {},
                    error: {}
                }
            }

            let temp_response2 = {
                [object.key]: {

                    loading: false,
                    status: 'success',
                    status_code: true,
                    response: {},
                    error: {
                        title: 'Error',
                        message: 'Something went wrong!',
                        msg: ''
                    }
                }
            }

            setDataPocket(temp_response1)
            setTimeout(() => { setDataPocket(temp_response2) }, 3000);

        }


        if (object.request_type.toLowerCase() === 'post') {

        }
    }

    //---------- helper : misc

    const verifyAndSaveKey = (current_key) => {

        if (current_key === previousKey) {

            return true;
        } else {

            setPreviousKey(current_key)
            return false;
        }
    }

    //---------- return main view

    return ({
        serverRequest, dataPocket, loading, error
    })
}

//---------- export component

export default useServerCommunucation;