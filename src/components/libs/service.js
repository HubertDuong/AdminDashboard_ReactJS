    export const clickOutSideRef = (refContent, refToggle) => {

        document.addEventListener('mousedown', (e) => {
            if (refToggle.current && refToggle.current.contains(e.target)) {
                refContent.current.classList.toggle('active')
            } else {
                if(refContent.current && !refContent.current.contains(e.target)) {
                    refContent.current.classList.remove('active')
                }
            }
        })
    }