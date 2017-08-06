<?php
$dir = new DirectoryIterator(dirname(__FILE__) . "\Datatech_files");
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
        $name = $fileinfo->getPathname();
        $pos = strpos($name, '.завантаження');
        if ($pos !== false) {
            var_dump(substr($name, 0, $pos));
            rename(
                $name,
                substr($name, 0, $pos)
            );
        }
    }
}