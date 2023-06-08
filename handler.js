const calculateBMI = (req, res) => {
    const { height, weight } = req.body;
  
    if (!height || !weight) {
      return res.status(400).json({ error: 'Tinggi dan berat badan harus diberikan.' });
    }
  
    const heightInMeter = height / 100;
    const bmi = weight / ((heightInMeter * heightInMeter));
  
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    res.json({ height, weight, bmi, category  });
  };


module.exports = {
    calculateBMI,
}; 