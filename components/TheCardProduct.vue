<template>
<NuxtLink v-if="linkBlock" :to="item.localUrl">
	<div class="card__inner">
		<div class="card__img">
			<img :src="item.img" alt="" class="r-20">
		</div>
		<div class="card__description t-26">
			<p>{{ item.title }}</p>
<!--			<TheLinkMore v-if="item.localUrl" :to="item.localUrl" :type="'link-more'"  />-->
		</div>
	</div>
</NuxtLink>

<div v-else class="card__inner">
	<div class="card__img">
		<img :src="item.img" alt="" class="r-20">
	</div>
	<div class="card__description t-26">
		<p>{{ item.title }}</p>
		<TheLinkMore v-if="item.localUrl" :to="item.localUrl" :type="'link-more'"  />
	</div>
</div>
</template>

<script>

import Entity from "~/dto/Entity.js";

export default {
	props: {
		item: {
			type: Entity,
			required: true
		},
        linkBlock: {
            type: Boolean,
            default: true
        }
	}

}
</script>

<style lang="scss">
.card {
	&__inner {
		background-color: #EAEEF5;
		border-radius: 20px;
		height: 100%;
	}
	&__img {
		text-align: center;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__description {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 40px;
		@media(max-width: 767px) {
			padding: 15px 20px;
		}
		p {
			margin-bottom: 0;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			// @media(max-width: 767px) {
			// 	overflow: hidden;
			// 	white-space: nowrap;
			// 	text-overflow: ellipsis;
			// }
		}
	}
}
</style>