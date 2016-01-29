<?php 
	if (is_ajax()) {
		if(isset($_POST['action']) && !empty($_POST['action'])){
            include('config.php');
            $datasource = new PDO($dsn, $user, $password);
            switch($_POST['action']){     
                case 'donnees':
                    $sql  = "SELECT var, value, lib, display ";
                    $sql .= "FROM video";
                    $statement=$datasource->prepare($sql);
                    $statement->execute();
                    $results=$statement->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($results);
                break;
                case 'update':
                    $sql  = "UPDATE video SET " . $_POST['field'] . "=" . $_POST['value'] . " WHERE var='" . $_POST['var'] . "'";
                    echo $sql;
                    $statement=$datasource->prepare($sql);
                    $statement->execute();
                break;
            }
               
        } else {
            echo "parametre action manquant";
        }
    }
	function is_ajax() {
		return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
	}
?>