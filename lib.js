
module.exports = {
    randomnullaszaz() {
        // Math.random() 0.. 1 közötti töredék
        return Math.round(Math.random() * 100)
    },
    negyzet(x) {
        return x * x;
    }, 
    terulet(a, b) {
        return a * b;
    }, 
    szohossz(n) {
        //    if (condition) {
        //        
        //    } else if () {
        //        
        //    } else if () {
        //
        //    } else {
        //        
        //    }

        try {

            if (n.length == undefined) throw new Error("hibabakker")

            return n.length
        } catch (error) {
            console.log(error)
            return "nincsneki"
        }

        //    if(n.length){
        //        return n.length
        //    } else {
        //        return "nincsneki"
        //    }
    }, 
    betukeres(mondat,betu) {

        let n = 0;
        for (let i = 0; i < mondat.length; i++) {
            let b = mondat[i];
    
            if(b == betu) {
                //n = n + 1
                n++;
            }
        }
        return n;
    }
    

}