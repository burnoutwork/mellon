job("run tests") {
	container(displayName = "test_contract", image = "ubuntu") {
		shellScript {
			interpreter = "/bin/bash"
			content = "apt-get update && apt-get install npm rustc cargo" +
					  "npm run test"
		}
	}
}


