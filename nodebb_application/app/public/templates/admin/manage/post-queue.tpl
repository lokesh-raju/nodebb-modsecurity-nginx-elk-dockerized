<!-- IF breadcrumbs.length -->
<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
	{{{each breadcrumbs}}}
	<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" <!-- IF @last -->class="active"<!-- ENDIF @last -->>
		<meta itemprop="position" content="@index" />
		<!-- IF !@last --><a href="{breadcrumbs.url}" itemprop="item"><!-- ENDIF !@last -->
			<span itemprop="name">
				{breadcrumbs.text}
				<!-- IF @last -->
				<!-- IF !feeds:disableRSS -->
				<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}" itemprop="item"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
				<!-- ENDIF @last -->
			</span>
		<!-- IF !@last --></a><!-- ENDIF !@last -->
	</li>
	{{{end}}}
</ol>
<!-- ENDIF breadcrumbs.length -->


<div class="row">
	<div class="col-xs-12">
		<div class="post-queue panel panel-primary preventSlideout">
			<div class="panel-heading">
				[[admin/manage/post-queue:post-queue]]
			</div>

			<!-- IF !posts.length -->
			<p class="panel-body">
				[[admin/manage/post-queue:description, {config.relative_path}/admin/settings/post#post-queue]]
			</p>
			<!-- ENDIF !posts.length -->

			<div class="table-responsive">
				<table class="table table-striped posts-list">
					<thead>
						<tr>
							<th>[[admin/manage/post-queue:user]]</th>
							<th>[[admin/manage/post-queue:category]]</th>
							<th>[[admin/manage/post-queue:title]]</th>
							<th>[[admin/manage/post-queue:content]] <i class="fa fa-info-circle" data-toggle="tooltip" title="[[admin/manage/post-queue:content-editable]]"></i></th>
							<th>[[admin/manage/post-queue:posted]]</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<!-- BEGIN posts -->
						<tr data-id="{posts.id}">
							<td class="col-md-1">
								<!-- IF posts.user.userslug -->
								<a href="{config.relative_path}/uid/{posts.user.uid}">{posts.user.username}</a>
								<!-- ELSE -->
								{posts.user.username}
								<!-- ENDIF posts.user.userslug -->
							</td>
							<td class="col-md-2">
								<a href="{config.relative_path}/category/{posts.category.slug}"><!-- IF posts.categiry.icon --><span class="fa-stack"><i style="color: {posts.category.bgColor};" class="fa fa-circle fa-stack-2x"></i><i style="color: {posts.category.color};" class="fa fa-stack-1x fa-fw {posts.category.icon}"></i></span><!-- ENDIF posts.category.icon --> {posts.category.name}</a>
							</td>
							<td class="col-md-2 topic-title">
								<!-- IF posts.data.tid -->
								<a href="{config.relative_path}/topic/{posts.data.tid}">[[admin/manage/post-queue:reply-to, {posts.topic.title}]]</a>
								<!-- ENDIF posts.data.tid -->
								{posts.data.title}
							</td>
							<td class="col-md-5 post-content">{posts.data.content}</td>
							<td class="col-md-5 post-content-editable hidden">
								<textarea>{posts.data.rawContent}</textarea>
							</td>
							<td class="col-md-1">
								<span class="timeago" title={posts.data.timestampISO}></span>
							</td>
							<td class="col-md-1">
								<div class="btn-group pull-right">
									<button class="btn btn-success btn-xs" data-action="accept"><i class="fa fa-check"></i></button>
									<button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-times"></i></button>
								</div>
							</td>
						</tr>
						<!-- END posts -->
					</tbody>
				</table>
			</div>

			<div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
	<ul class="pagination hidden-xs">
		<li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			<!-- IF pagination.pages.separator -->
			<li component="pagination/select-page" class="page select-page">
				<a href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			<!-- ELSE -->
			<li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
				<a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			<!-- ENDIF pagination.pages.separator -->
		{{{end}}}

		<li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	<ul class="pagination hidden-sm hidden-md hidden-lg">
		<li class="first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page select-page">
			<a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
</div>
		</div>
	</div>
</div>