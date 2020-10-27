import React from 'react';

/**
 * Turns an array of string into a <blockquote> containing a <p> for each string
 * 
 * @param {Array} array an array of strings
 * 
 * @return a blockquote element
 */
export function useArrayToQuote(array) {
    return (
        <blockquote>
        {array.map((string, index) => {
            return (
                <p key={index}>{string}</p>
            )
        })}
        </blockquote>
    )
}