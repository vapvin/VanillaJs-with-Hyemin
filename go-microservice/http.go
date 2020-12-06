func main(){
	port := 8080

	http.HandleFunc("/helloworld", helloWorldHandler)

	log.Printf("Server starting on port %v\n", 8080)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", port), nil))
}

func helloWorldHandler(w http.ResponseWriter, r *http.Request) {
	var request HelloWorldRequest
	decoder := json.NewDecoder(r.Body)
	

	err := decoder.Decode(&request)
	if err != nil {
		http.Error(w, "Bad Request", http.StatusBadRequest)
		return
	}

	response := HelloWorldResponse{Message: "Hello" + request.Name}

	encoder := json.NewEncoder(w)
	encoder.Encode(response)
	
}