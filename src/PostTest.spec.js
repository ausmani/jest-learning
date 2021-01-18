import axios from 'axios';

export const API = 'https://hn.algolia.com/api/v1';

export const fetchData = async query => {
    const url = `${API}/search?query=${query}`;
    //console.log(url)
    const dataFetched = await axios.get(url);
    //console.log(dataFetched)
    return dataFetched;

};

jest.mock('axios')
describe('Fetch Data',()=>{
    it('should Fetch Data Successfully', async ()=> {
        const data = {
            data: {
                test: [
                    {
                        myId: '3',
                        title: 'a',
                    },
                    {
                        myI: '2',
                        title: 'b',
                    },
                ],
            },
        };

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(fetchData('react')).resolves.toEqual(data);
        //console.log(`${API}/search?query=react`)
        expect(axios.get).toHaveBeenCalledWith(
            `${API}/search?query=react`,
        );
    });
    it('fetch error', async ()=> {

        const errorMessage = 'Network Error';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        await expect(fetchData('react')).rejects.toThrow(errorMessage);
    });
})
