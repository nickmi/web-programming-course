<?php
	
	function name() {
		$today = date('Y-m-d H:i:s');
		$hashID = hash('sha256', $today);
		
		echo $hashID;
	}
	
	
	
	name();
	
?>