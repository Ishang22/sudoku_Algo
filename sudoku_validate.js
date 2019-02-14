module.exports = {

    isValidSudoku : function(A){
        var boxs = [[],[],[],[],[],[],[],[],[]];

        for(var i = 0 ; i < 9 ; i++){
            var cRow = [];

            if(!this.validRepeat(A[i])){
                return false;
            }

            for(var j = 0 ; j < 9 ; j++){
                cRow.push(A[j][i]);
                var boxId = 3*parseInt(i/3) +parseInt(j/3);
                boxs[boxId].push(A[i][j]);
            }

            if(!this.validRepeat(cRow)){
                return false;
            }

        }

        for(var k = 0 ; k < 9 ; k++){
            if(!this.validRepeat(boxs[k])){
                return false;
            }
        }

        return true;
    },

    validRepeat: function(array) {
        var map = [];

        for(var i = 0; i < 9 ; i++){
            if(array[i] == ".") continue;
            if(map.indexOf(array[i]) == -1){
                map.push(array[i]);
            } else {
                return 0;
            }
        }

        return 1;

    }
};
