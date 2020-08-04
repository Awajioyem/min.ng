import { Component } from 'react';
import * as apiService from './apiservice';


export class AppService extends Component {

    constructor(props) {
        super(props);
    }


    /**
     * SAMPLE CALLS
     */

    /**
     * -----------------------------
     */

    /**
     * SAMPLE GET
     * This method get all samples
     */
    async getAllSamples() {
        return await apiService.get('sample');
    }


    /**
    * SAMPLE GETBYID
    * @param {*} id 
    * This method gets a specific sample
    */
    async getSampleById(id) {
        return await apiService.get('sample', id);
    }


    /**
     * 
    * SAMPLE POST
    * 
    * 
    * This method creates a new sample
    */
    async createSample(data = {}) {
        return await apiService.post('sample', data);
    }


    /**
     *  SAMPLE DELETE
     * 
     * @param {*} id 
     * This method deletes a sample
     */
    async deleteSample(id) {
        return await apiService.del('sample', id);
    }


    /**
     * 
     * @param {*} id 
     * @param {*} data 
     * 
     * SAMPLE PUT
     * 
     * This method updates a  specific sample
     */
    async updateSample(id, data) {
        const url = `smaple/${id}`;
        return await apiService.put(url, data);
    }


    /**
     * 
     * @param {*} id 
     * @param {*} data 
     * 
     * SAMPLE PATCH
     * This method toggles a sample's enabled status
     */

    async toggleSample(id, data) {
        const url = `sample/${id}`;
        return await apiService.patch(url, data);
    }






}