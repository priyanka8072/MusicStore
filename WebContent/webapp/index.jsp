<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="../../favicon.ico">

<title>MStore</title>

<!-- Bootstrap core CSS -->
<link href="carousel/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<!-- <link href="carousel/assets/css/ie10-viewport-bug-workaround.css"rel="stylesheet">
 -->
<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
<script src="carousel/assets/js/ie-emulation-modes-warning.js"></script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

<!-- Custom styles for this template -->
<link href="carousel/HTML/carousel.css" rel="stylesheet">

</head>
<!-- NAVBAR
================================================== -->
<body>
	<div class="navbar-wrapper">
		<div class="container">

			<nav class="navbar navbar-inverse navbar-static-top">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed"
							data-toggle="collapse" data-target="#navbar"
							aria-expanded="false" aria-controls="navbar">
							<span class="sr-only">Toggle navigation</span> <span
								class="icon-bar"></span> <span class="icon-bar"></span> <span
								class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#">MStore</a>
					</div>
					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li class="active"><a href="#">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#contact">Contact</a></li>
							<li class="dropdown"><a href="#" class="dropdown-toggle"
								data-toggle="dropdown" role="button" aria-haspopup="true"
								aria-expanded="false">Dropdown <span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li><a href="#">Albums</a></li>
									<li><a href="#">Artists</a></li>
									<li><a href="#">Songs</a></li>
									<li role="separator" class="divider"></li>
									<li><a href="carousel/HTML/display.html" target="_blank">Browse
											Galary</a></li>
									<li><a href="#">Admin</a></li>
								</ul>
								<form class="navbar-form navbar-left">
									<div class="form-group">
										<input type="text" class="form-control" id="formdata"
											placeholder="Search">
									</div>
									<button type="submit" class="btn btn-default" id="submit">Submit</button>
								</form></li>
						</ul>
					</div>
				</div>
			</nav>

		</div>
	</div>


	<!-- Carousel
    ================================================== -->
	<div id="myCarousel" class="carousel slide" data-ride="carousel">
		<!-- Indicators -->
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			<li data-target="#myCarousel" data-slide-to="1"></li>
			<li data-target="#myCarousel" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner" role="listbox">
			<div class="item active">
				<img class="first-slide" src="carousel/Images/PF1.jpg"
					alt="First slide">
				<div class="container">
					<div class="carousel-caption">
						<h1>A store for all</h1>
						<p></p>
						<p>
							<a class="btn btn-lg btn-primary" href="gallery.html"
								role="button" target="_blank">Browse gallery</a>
						</p>
					</div>
				</div>
			</div>
			<div class="item">
				<img class="second-slide" src="carousel/Images/AC.jpg"
					alt="Second slide">
				<div class="container">
					<div class="carousel-caption">
						<h1>Best deal on your music</h1>
						<p></p>
						<p>
							<a class="btn btn-lg btn-primary" href="gallery.html"
								role="button" target="_blank">Browse gallery</a>
						</p>
					</div>
				</div>
			</div>
			<div class="item">
				<img class="third-slide" src="carousel/Images/Metallica.jpg"
					alt="Third slide">
				<div class="container">
					<div class="carousel-caption">
						<h1 style="color: blue"></h1>
						</br>
						<p></p>
						<br />
						<h1 style="color: white; background-color: black">
							Top sellers
							<h1>
								<p>
									<a class="btn btn-lg btn-primary" href="gallery.html"
										role="button" target="_blank">Browse gallery</a>
								</p>
					</div>
				</div>
			</div>
		</div>
		<a class="left carousel-control" href="#myCarousel" role="button"
			data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"
			aria-hidden="true"></span> <span class="sr-only">Previous</span>
		</a> <a class="right carousel-control" href="#myCarousel" role="button"
			data-slide="next"> <span
			class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
	<!-- /.carousel -->


	<!-- Marketing messaging and featurettes
    ================================================== -->
	<!-- Wrap the rest of the page in another container to center all the content. -->

	<div class="container marketing">

		<!-- Three columns of text below the carousel -->
		<div class="row">
			<div class="col-lg-4">
				<img class="img-circle" src="carousel/Images/Time1.PNG"
					alt="Generic placeholder image" width="140" height="140">
				<h2></h2>
				<p>Visit the store on weekdays</p>
				<!--    <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p> -->
			</div>
			<!-- /.col-lg-4 -->
			<div class="col-lg-4">
				<img class="img-circle" src="carousel/Images/Time 2.PNG"
					alt="Generic placeholder image" width="140" height="140">
				<h2></h2>
				<p>Special discounts on saturday</p>
				<!--  <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p> -->
			</div>
			<!-- /.col-lg-4 -->
			<div class="col-lg-4">
				<img class="img-circle" src="carousel/Images/Time 3.PNG"
					alt="Generic placeholder image" width="140" height="140">
				<h2></h2>
				<p>Listen to free music on sunday</p>
				<!--    <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p> -->
			</div>
			<!-- /.col-lg-4 -->
		</div>
		<!-- /.row -->


		<!-- START THE FEATURETTES -->

		<hr class="featurette-divider">

		<div class="row featurette">
			<div class="col-md-7">
				<h2 class="featurette-heading">
					Music is passion?<span class="text-muted">You are in the
						right place.</span>
				</h2>
				<p class="lead">Music to you is a: Hobby? Passion? Curiosity?
					Profession? Then absolutely in the right place as we share your
					enthusiasm for music and we offer everything required for the
					perfect musical experience</p>
			</div>
			<div class="col-md-5">
				<!--<img class="featurette-image img-responsive center-block" data-src="E:\MS Books\Dis&Para\Project\UI\carousel/Images/music1.jpg" alt="Generic placeholder image">-->
				<img src="carousel/Images/music1.jpg">
			</div>
		</div>

		<hr class="featurette-divider">

		<div class="row featurette">
			<div class="col-md-7 col-md-push-5">
				<h2 class="featurette-heading">
					Oh yeah, it's that good! <span class="text-muted">Buy it for
						the best price.</span>
				</h2>
				<p class="lead">Here you can try practically anything you want
					and then take it home with you in its original packaging from our
					store</p>
			</div>
			<div class="col-md-5 col-md-pull-7">
				<!--<img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image">-->
				<img src="carousel/Images/music2.jpg">
			</div>
		</div>

		<hr class="featurette-divider">

		<div class="row featurette">
			<div class="col-md-7">
				<h2 class="featurette-heading">
					And lastly, this one. <span class="text-muted">Checkmate.</span>
				</h2>
				<p class="lead">Buy instruments & equipments as well. We will
					give you enough time to test the products and hope to give you the
					opportunity to slowly fall in love with your new acquisition.</p>
			</div>
			<div class="col-md-5">
				<!--<img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image">-->
				<img src="carousel/Images/music3.jpg">
			</div>
		</div>

		<hr class="featurette-divider">

		<!-- /END THE FEATURETTES -->


		<!-- FOOTER -->
		<footer>
			<p class="pull-right">
				<a href="#">Back to top</a>
			</p>
			<p>
				&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot;
				<a href="#">Terms</a>
			</p>
		</footer>

	</div>
	<!-- /.container -->


	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script>
		window.jQuery
				|| document
						.write('<script src="carousel/assets/js/vendor/jquery.min.js"><\/script>')
	</script>
	<script src="carousel/dist/js/bootstrap.min.js"></script>
	<!-- Just to make our placeholder images work. Don't actually copy the next line! -->
	<script src="carousel/assets/js/vendor/holder.min.js"></script>
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="carousel/assets/js/ie10-viewport-bug-workaround.js"></script>
	<script src="carousel/js/songSearch.js"></script>
</body>
</html>
