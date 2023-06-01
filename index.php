<?php
/**
 * 这是 Typecho 的一款新模板，参考了win95的一个模板，尊重作者，请保留首页底部vpsmm链接。如果有意愿强烈移除，请到 <a href="https://typecho.me/donate.html">http://typecho.me/donate.html</a> 捐赠个咖啡钱，谢谢。
 * 
 * @package Typecho windows 95 Theme 
 * @author Typecho Team
 * @version 1.2
 * @link http://typecho.me
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;
 $this->need('header.php');
 ?>

<div class="wrapper">
		<div class="default_title">
			<img src="<?php $this->options->themeUrl(); ?>assets/img/mycomputer.png">
			
				<h1><?php $this->options->title() ?></h1>
			
		</div>
		<ul class="topbar">
<?php $this->widget('Widget_Contents_Page_List')->to($pages); ?>
                    <?php while($pages->next()): ?>
	<a href="<?php $pages->permalink(); ?>"><li><?php $pages->title(); ?></li></a>
	<?php endwhile; ?>

</ul>
		<div class="tag_list">
			<ul id="tag-list">
				<li><a href="<?php $this->options->siteUrl(); ?>"><img src="<?php $this->options->themeUrl(); ?>assets/img/disk.png">(C:)</a>
			<ul>
				
				<?php $this->widget('Widget_Metas_Category_List')->to($category); ?>
    <?php while ($category->next()): ?>
    	<li><a href="<?php $category->permalink(); ?>"><img src="<?php $this->options->themeUrl(); ?>assets/img/folder.ico"><?php $category->name(); ?></a></li>
    <?php endwhile; ?>

				
			</ul>
				</li>
			</ul>
		</div>
		<div class="post_list">
			
				
					<ul>
	<?php while($this->next()): ?>
	<li><a href="<?php $this->permalink() ?>" title="<?php $this->title() ?>"><img src="<?php $this->options->themeUrl(); ?>assets/img/file.ico" title="<?php $this->title() ?>"><?php $this->title() ?></a></li>
	<?php endwhile; ?>

	
</ul>
				
			
		</div>
		<div class="post_total">
			
				<div class="left"><?php Typecho_Widget::widget('Widget_Stat')->to($stat); ?><?php $stat->publishedPostsNum() ?> object(s)</div>
			
			<div class="right">&nbsp;</div>
		</div>
	</div>

<?php $this->need('footer.php'); ?>



