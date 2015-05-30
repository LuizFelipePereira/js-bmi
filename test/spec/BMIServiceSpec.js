describe('BMIService', function(){
    it('should calculatte the BMI given a weight and height', function(){
        expect(BMIService.getIndex(75,1.71)).toBe(25.648917615676618446701549194624);
       });   
    
       it('should return null for a non valid number', function(){     
        expect(BMIService.getIndex('1','')).toBe(null);            
       }); 
    


});