"use client"

import axios from "axios"

const access_token = "XPe12lqFWlF5hHd2e8-lPJzHiWXY_rUQJm1lxVL2U4I"
const space_id = '39ar5d1wgb5k'
const content_type = 'Todo1'

export function getDataPost(){
    return axios.get(`https://cdn.contentful.com/spaces/${space_id}/environments/master/entries?access_token=${access_token}&content_type=${content_type}`)
}

export function getImage(id:string){
    return axios.get('https://cdn.contentful.com/spaces/${space_id}/environments/master/assets/${id}?access_token=${access_token}')
}