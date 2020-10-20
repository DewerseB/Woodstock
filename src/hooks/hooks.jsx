import React from 'react';
const { Fragment } = require("react")

/**
 * Turns an array of string into a react Fragment containing a <p> for each string
 * 
 * @param {Array} array an array of strings
 * 
 * @return a react Fragment
 */
export function useArrayToP(array) {
    return (
        <Fragment>
        {array.map((string) => {
            return (
                <p>{string}</p>
            )
        })}
        </Fragment>
    )
}