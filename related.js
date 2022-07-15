        var postLabels = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>, </b:if></b:loop></b:if>];
        var relatedConfig = {
            postUrl: &quot;<data:post.url/>&quot;,
            homePageUrl: &quot;<data:blog.canonicalHomepageUrl/>&quot;,
            relatedTitleText: &quot;<data:messages.youMayLikeThesePosts/> :&quot;,
        }; 
