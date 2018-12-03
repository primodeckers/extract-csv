<template>
    <button-spinner
	:is-loading="isLoading" 
	:disabled="isLoading"
	:status="status">
	<span>Submit</span>
</button-spinner>
</template>

<script>
import VueButtonSpinner from 'vue-button-spinner';

export default {
		name: 'Subimit',
		data() {
			return {
				isLoading: false,
				status: '',
			}
		},
		components: {	
			VueButtonSpinner
		},
		methods: {
			onSubmit() {
			    this.isLoading = true
				$someRequest('/url', 'GET')
				.then(response => {
					this.isLoading = false
					this.status = true // or success
					setTimeout(() => { this.status = '' }, 2000) // to clear the status :)
				})
				.catch(error => {
					console.error(error)
					this.isLoading = false
					this.status = false //or error
				})
			}
		}
}
</script>

<style>

</style>
