function BingoCard(){
    this.matrix=[];
    this.generateMatrix=()=>{
        var b=[];
        var i=[];
        var n=[];
        var g=[];
        var o=[];
        for(var a =0; a<5; a++){
             b[a]=Math.floor(Math.random()*(15-1) + 1)
         }
         for (var outer =0;outer <b.length; outer++){
             for(var inner=0; inner < b.length ; inner++){
                 if(inner!== outer && b[outer]===b[inner]){
                     b[outer]=Math.floor(Math.random()*(15-1)+ 1)
                 }
             }
         } 
         this.matrix.push(b)


        for(var a =0; a<5; a++){
            i[a]=Math.floor(Math.random()*(30-16) + 16)
        }
        for (var outer =0;outer <i.length; outer++){
            for(var inner=0; inner < i.length ; inner++){
                if(inner!== outer && i[outer]===i[inner]){
                    i[outer]=Math.floor(Math.random()*(30-16)+ 16)
                }
            }
        } 
        this.matrix.push(i)
        console.log(this.matrix)

        for(var a =0; a<5; a++){
            n[a]=Math.floor(Math.random()*(45-31) + 31)
        }
        for (var outer =0;outer <n.length; outer++){
            for(var inner=0; inner < n.length ; inner++){
                if(inner!== outer && n[outer]===n[inner]){
                    n[outer]=Math.floor(Math.random()*(45-31) + 31)
                }
            }
        } 
        this.matrix.push(n)

        for(var a =0; a<5; a++){
            g[a]=Math.floor(Math.random()*(60-46) + 46)
        }
        for (var outer =0;outer <g.length; outer++){
            for(var inner=0; inner < g.length ; inner++){
                if(inner!== outer && g[outer]===g[inner]){
                    g[outer]=Math.floor(Math.random()*(60-46) + 46)
                }
            }
        } 
        this.matrix.push(g)

        for(var a =0; a<5; a++){
            o[a]=Math.floor(Math.random()*(75-61) + 61)
        }
        for (var outer =0;outer <o.length; outer++){
            for(var inner=0; inner < o.length ; inner++){
                if(inner!== outer && o[outer]===o[inner]){
                    o[outer]=Math.floor(Math.random()*(75-61) + 61)
                }
            }
        } 
        this.matrix.push(o)
    }

    //method  for showing the cards using HTML
    //<table> to create a table 
    //<tr> to create a row inside the table 
    //<td> to create a column in a table
    //<th> for table heading

    this.drawCard=()=>{
        return `
        <div>
            <table>
                <tr>    
                <th class="cell-highlight">B</th>
                <th class="cell-highlight">I</th>
                <th class="cell-highlight">N</th>
                <th class="cell-highlight">G</th>
                <th class="cell-highlight">O</th>
                </tr>
                <tr>
                    <td id="${this.matrix[0][0]}">${this.matrix[0][0]}</td>
                    <td id="${this.matrix[1][0]}">${this.matrix[1][0]}</td>
                    <td id="${this.matrix[2][0]}">${this.matrix[2][0]}</td>
                    <td id="${this.matrix[3][0]}">${this.matrix[3][0]}</td>
                    <td id="${this.matrix[4][0]}">${this.matrix[4][0]}</td>
                </tr>

                <tr>
                    <td id="${this.matrix[0][1]}">${this.matrix[0][1]}</td>
                    <td id="${this.matrix[1][1]}">${this.matrix[1][1]}</td>
                    <td id="${this.matrix[2][1]}">${this.matrix[2][1]}</td>
                    <td id="${this.matrix[3][1]}">${this.matrix[3][1]}</td>
                    <td id="${this.matrix[4][1]}">${this.matrix[4][1]}</td>
                </tr>

                <tr>
                    <td id="${this.matrix[0][2]}">${this.matrix[0][2]}</td>
                    <td id="${this.matrix[1][2]}">${this.matrix[1][2]}</td>
                    <td id="${this.matrix[2][2]}" style="background-color: rgb(121,252,109);"><p id="free">FREE</p></td>
                    <td id="${this.matrix[3][2]}">${this.matrix[3][2]}</td>
                    <td id="${this.matrix[4][2]}">${this.matrix[4][2]}</td>
                </tr>

                <tr>
                    <td id="${this.matrix[0][3]}">${this.matrix[0][3]}</td>
                    <td id="${this.matrix[1][3]}">${this.matrix[1][3]}</td>
                    <td id="${this.matrix[2][3]}">${this.matrix[2][3]}</td>
                    <td id="${this.matrix[3][3]}">${this.matrix[3][3]}</td>
                    <td id="${this.matrix[4][3]}">${this.matrix[4][3]}</td>
                </tr>

                <tr>
                    <td id="${this.matrix[0][4]}">${this.matrix[0][4]}</td>
                    <td id="${this.matrix[1][4]}">${this.matrix[1][4]}</td>
                    <td id="${this.matrix[2][4]}">${this.matrix[2][4]}</td>
                    <td id="${this.matrix[3][4]}">${this.matrix[3][4]}</td>
                    <td id="${this.matrix[4][4]}">${this.matrix[4][4]}</td>
                </tr>
            </table>
            <br/>
            <br/>

        </div>
        `
    }
}