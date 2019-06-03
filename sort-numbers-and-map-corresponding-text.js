var examples =  [
            {
                'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 0"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 0"))
            },
            {
               'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 1"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 1"))
            },
            {
               'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 2"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 2"))
            },
            {
               'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 3"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 3"))
			},
  			{
               'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 4"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 4"))
			},  
			{
               'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 5"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 5"))
			}, 
			{
               'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 6"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 6"))
			},   
			{
               'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 7"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 7"))
			},  
			{
               'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 8"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 8"))
			},  
			{
               'text'     : thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Text Data")("Text Data 9"),
                'number'    : parseInt(thisComp.layer("Data-Driven-Sample.csv")("Data")("Outline")("Number Data")("Number Data 9"))
			},             

        ];

     const list = examples.sort((a,b) => b.number-a.number).map((examples, number, array) => examples.text)

  list.join("\n")
