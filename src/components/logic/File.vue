<template>
	<div class="d-flex align-items-center gap-2">
		<img src="../../assets/icons/file.svg" alt="file Icon" width="30" />
		<span>{{ file.name }}</span>
		<button class="btn btn-pill" @click="deleteFile(file.id)">X</button>
	</div>
</template>

<script>
export default {
	props: ['file', 'deleteFile'],
}
</script>

<style></style>
