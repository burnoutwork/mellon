job("run tests") {
	container(displayName = "test_contract", image = "ubuntu") {
		shellScript {
			interpreter = "/bin/bash"
			content = "npm run test"
		}
	}
}


