package net.javaguides.msc.repository;

import net.javaguides.msc.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository <Employee, Long>{

}
