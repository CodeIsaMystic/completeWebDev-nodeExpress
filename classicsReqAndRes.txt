



app.get('/:id', (req, res) => {
  
   /** types of req
   * 
   */
   
    req.query   => access the query string
    console.log(req.query);

    req.body    => receive what is in the body
    console.log(req.body);
    
    req.headers => get all header of the req
    console.log(req.headers);
    
    req.params  =>  '/:id' get access to what is on the url 
                => every kind of params
    console.log(req.params);
  


   /*
   * 
     res.send('Getting the root location');
   */
   res.status(404).send('Page No Found');
});
