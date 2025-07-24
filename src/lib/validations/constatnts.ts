

export const question = {
    minLength : 1,
    maxLength : 2500
}as const;

export const event = {
    slug : {
        min : 1,
        max : 255
    },
    displayName : {
        min : 1,
        max : 100
    }
} as const ;

export const poll = {
    body : {
        minLength : 1,
        maxLength : 500
    },
    options : {
        minLength : 1,
        maxLength : 1000,
        minCount : 2,
        maxCount : 6
    }
} as const;