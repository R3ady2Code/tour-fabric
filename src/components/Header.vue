<template>
	<header class="page-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-auto">
					<img class="header__logo" src="../assets/logo-1.png" alt="Logo" />
				</div>
				<div class="col-auto">
					<img
						class="header__logo header__logo_second"
						src="../assets/logo-2.png"
						alt="Logo"
					/>
				</div>
				<div class="col-auto">
					<img
						class="header__avatar"
						src="../assets/guest-avatar.jpg"
						alt="Avatar"
					/>
				</div>
				<div class="col">
					<div class="page-title">Кабинет</div>
					<div class="page-subtitle">Вы вошли как ...</div>
				</div>

				<div class="col-auto d-none d-md-flex">
					<a href="#" class="btn btn-primary"> Настройки </a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.page-header {
	background-color: #ffffff;
	padding: 5px;
	max-width: 100%;
	margin-bottom: 2rem;
}

.page-title {
	font-size: 15px;
	line-height: 15px;
}

.page-subtitle {
	font-size: 12px;
	margin-top: 0;
}

.header {
	&__logo {
		width: 60px;
		&_second {
			margin-right: 9rem;
		}
	}
	&__avatar {
		width: 30px;
	}
}
</style>
